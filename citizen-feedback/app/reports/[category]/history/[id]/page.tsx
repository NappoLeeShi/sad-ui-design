import { FileText } from "lucide-react";
import { Suspense } from "react";

import { EmptyState } from "@/components/ui/EmptyState";
import { LoadingState } from "@/components/ui/LoadingState";
import { PageHeader } from "@/components/ui/PageHeader";
import { getReportCategory, REPORT_CATEGORY_META } from "@/lib/report-catalog";

function ReportDetailPlaceholder({
  category,
  reportId,
}: {
  category: string;
  reportId: string;
}) {
  const categoryKey = getReportCategory(category);

  if (!categoryKey) {
    return (
      <>
        <PageHeader title="Chi tiết báo cáo" backHref="/feedback" />
        <main className="flex-1 px-5 py-6">
          <EmptyState
            icon={FileText}
            title="Không tìm thấy báo cáo"
            description="Đường dẫn không thuộc danh mục phản ánh đang hoạt động."
          />
        </main>
      </>
    );
  }

  const meta = REPORT_CATEGORY_META[categoryKey];

  return (
    <>
      <PageHeader title="Chi tiết báo cáo" backHref={meta.historyPath} />
      <main className="flex-1 px-5 py-6">
        <EmptyState
          icon={FileText}
          title="Chi tiết đang được hoàn thiện"
          description={`Thông tin của báo cáo ${reportId} sẽ được hiển thị ở bước tiếp theo của bản mẫu.`}
        />
      </main>
    </>
  );
}

export default function ReportDetailPage({
  params,
}: PageProps<"/reports/[category]/history/[id]">) {
  return (
    <Suspense fallback={<LoadingState label="Đang mở báo cáo" />}>
      {params.then(({ category, id }) => (
        <ReportDetailPlaceholder category={category} reportId={id} />
      ))}
    </Suspense>
  );
}
