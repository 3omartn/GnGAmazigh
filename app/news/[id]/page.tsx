import { allNews } from '@/lib/allNews';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default function NewsPage({ params }: { params: { id: string } }) {
  const newsItem = allNews.find(item => item.id === Number(params.id));

  if (!newsItem) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">{newsItem.title}</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-96">
            <Image
              src={newsItem.img}
              alt={newsItem.title}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <p className="text-white text-lg leading-relaxed">
            {newsItem.desc}
          </p>
        </div>
      </div>
    </main>
  );
}