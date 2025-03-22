import { LucideIcon, Star, Book, FileText, Globe, Settings } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  order: number;
}

const iconMap: Record<string, LucideIcon> = {
  star: Star,
  book: Book,
  'file-text': FileText,
  globe: Globe,
  settings: Settings,
};

interface CategoryNavProps {
  categories: Category[];
  selectedCategory?: string;
  onSelectCategory: (categoryId: string) => void;
}

export function CategoryNav({ categories, selectedCategory, onSelectCategory }: CategoryNavProps) {
  return (
    <nav className="flex flex-wrap gap-4" role="navigation" aria-label="案例分类">
      {categories.sort((a, b) => a.order - b.order).map((category) => {
        const Icon = iconMap[category.icon];
        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full transition
              ${selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
            aria-current={selectedCategory === category.id ? 'page' : undefined}
          >
            {Icon && <Icon size={18} />}
            <span>{category.name}</span>
          </button>
        );
      })}
    </nav>
  );
} 