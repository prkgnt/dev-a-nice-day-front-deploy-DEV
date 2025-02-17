import { Metadata } from "next";
import ContentList from "./_components/ContentList/ContentList";
import styles from "./page.module.css";
import { Suspense } from "react";
import { contentListFallBack } from "./_components/ContentListFallback/ContentListFallback";

export const metadata: Metadata = {
  title: "Dev a Nice Day | 콘텐츠 목록",
};

export default function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <div className={styles.contentList}>
          <Suspense fallback={contentListFallBack}>
            <ContentList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
