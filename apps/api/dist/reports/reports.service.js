var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
let ReportsService = class ReportsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
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
        const rows = await this.prisma.$queryRaw `
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
};
ReportsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ReportsService);
export { ReportsService };
//# sourceMappingURL=reports.service.js.map