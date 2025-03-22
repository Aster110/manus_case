import Image from 'next/image';

interface CaseCardProps {
  title: string;
  thumbnail: string;
  thumbnailAlt: string;
  description: string;
  onClick: () => void;
}

export function CaseCard({ title, thumbnail, thumbnailAlt, description, onClick }: CaseCardProps) {
  return (
    <article
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-48">
        <Image
          src={thumbnail}
          alt={thumbnailAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </div>
    </article>
  );
} 