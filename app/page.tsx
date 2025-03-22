'use client';

import { useState } from "react";
import { CategoryNav } from "@/components/CategoryNav";
import { CaseCard } from "@/components/CaseCard";
import { CaseModal } from "@/components/CaseModal";
import categoriesData from "@/data/categories.json";
import casesData from "@/data/cases.json";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [selectedCase, setSelectedCase] = useState<typeof casesData.cases[0] | null>(null);

  const filteredCases = selectedCategory
    ? casesData.cases.filter(caseItem => caseItem.category === selectedCategory)
    : casesData.cases;

  return (
    <div className="flex flex-col min-h-screen">
      {/* 主内容区 */}
      <main className="flex-1">
        {/* 主标题区 */}
        <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Manus Case 案例展示
            </h1>
            <p className="text-xl text-gray-600">
              探索专业的医疗案例分析平台
            </p>
          </div>
        </section>

        {/* 分类导航区 */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Manus Case 案例分类
            </h2>
            <CategoryNav
              categories={categoriesData.categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </section>

        {/* 案例展示区 */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              精选 Manus Case 案例
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((caseItem) => (
                <CaseCard
                  key={caseItem.id}
                  title={caseItem.title}
                  thumbnail={caseItem.thumbnail}
                  thumbnailAlt={caseItem.thumbnailAlt}
                  description={caseItem.description}
                  onClick={() => setSelectedCase(caseItem)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 案例详情模态框 */}
      {selectedCase && (
        <CaseModal
          isOpen={!!selectedCase}
          onClose={() => setSelectedCase(null)}
          case={selectedCase}
        />
      )}

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2024 Manus Case. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
