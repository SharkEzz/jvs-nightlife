import { Card, CardContent, CardHeader } from '../ui/card';

export function StatCard({ value, title }: { value: number | string; title: string }) {
  return (
    <Card className="flex flex-col transition-shadow hover:shadow-lg">
      <CardHeader className="pb-2">
        <span className="text-sm">{title}</span>
      </CardHeader>
      <CardContent className="flex flex-1 items-end">
        <span className="font-medium text-xl">{value}</span>
      </CardContent>
    </Card>
  );
}
