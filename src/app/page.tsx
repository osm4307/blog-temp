import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

// 최신 포스트 타입 정의
interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
}

// 임시 데이터
const recentPosts: Post[] = [
  {
    id: '1',
    title: 'Next.js 14의 새로운 기능들',
    description: 'Next.js 14에서 추가된 새로운 기능들을 살펴봅니다.',
    date: '2024-03-12',
    author: '홍길동',
  },
  {
    id: '2',
    title: 'React Query로 서버 상태 관리하기',
    description: 'React Query를 사용하여 서버 상태를 효율적으로 관리하는 방법을 알아봅니다.',
    date: '2024-03-11',
    author: '김철수',
  },
  {
    id: '3',
    title: 'TailwindCSS로 반응형 디자인 구현하기',
    description: 'TailwindCSS를 활용하여 모던하고 반응형인 웹 디자인을 구현하는 방법을 소개합니다.',
    date: '2024-03-10',
    author: '이영희',
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* 히어로 섹션 */}
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">블로그에 오신 것을 환영합니다</h1>
        <p className="text-lg text-muted-foreground">
          최신 기술 트렌드와 개발 팁을 공유합니다
        </p>
      </section>

      {/* 최신 포스트 섹션 */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">최신 포스트</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>
                  {post.date} · {post.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
