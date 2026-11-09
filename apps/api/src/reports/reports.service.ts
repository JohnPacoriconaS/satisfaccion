import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

type SystemReportRow = {
  id: string;
  name: string;
  code: string;
  averageRating: number | null;
  totalEvaluations: number;
};

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  async overview() {
    const [students, systems, aggregate] = await Promise.all([
      this.prisma.student.count({ where: { active: true } }),
      this.prisma.system.count({ where: { active: true } }),
      this.prisma.evaluationHistory.aggregate({
        _count: { id: true },
        _avg: { rating: true },
        where: { evaluation: { is: { system: { is: { active: true } } } } },
      }),
    ]);
    return {
      students,
      systems,
      evaluations: aggregate._count.id,
      averageRating: aggregate._avg.rating
        ? Number(aggregate._avg.rating.toFixed(2))
        : 0,
    };
  }

  async systemsReport() {
    const rows = await this.prisma.$queryRaw<SystemReportRow[]>`
      SELECT s."id", s."name", s."code",
             AVG(h."rating")::double precision AS "averageRating",
             COUNT(h."id")::int AS "totalEvaluations"
      FROM "System" s
      LEFT JOIN "SatisfactionEvaluation" e ON e."systemId" = s."id"
      LEFT JOIN "EvaluationHistory" h ON h."evaluationId" = e."id"
      WHERE s."active" = true
      GROUP BY s."id", s."name", s."code"
      ORDER BY s."name" ASC
    `;
    return rows.map((row) => ({
      system: { id: row.id, name: row.name, code: row.code },
      averageRating: row.averageRating === null ? 0 : Number(row.averageRating.toFixed(2)),
      totalEvaluations: row.totalEvaluations,
    }));
  }

  async ratingsReport() {
    const rows = await this.prisma.evaluationHistory.groupBy({
      by: ['rating'],
      where: { evaluation: { is: { system: { is: { active: true } } } } },
      _count: { id: true },
      orderBy: { rating: 'asc' },
    });
    return [1, 2, 3, 4, 5].map((rating) => ({
      rating,
      total: rows.find((row) => row.rating === rating)?._count.id ?? 0,
    }));
  }
}
