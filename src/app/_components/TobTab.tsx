"use client";

import Image from "next/image";
import styles from "./TobTab.module.css";
import logo from "@/../public/assets/DevaNiceDay.svg";
import CategoryButton from "./CategoryButton";
import setting from "@/../public/assets/setting.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import carrot from "@/../public/assets/carrot_right.svg";

export default function TobTab() {
  const pathname = usePathname();
  const router = useRouter();
  if (pathname.includes("/groupContents"))
    return (
      <div className={styles.container}>
        <Image
          src={carrot.src}
          width={48}
          height={48}
          priority={true}
          alt="carrot"
          style={{ transform: "rotate(180deg)" }}
          onClick={() => router.back()}
        />
        <h1 className={styles.groupTitle}>모든 게시물</h1>
        <div style={{ width: 48, height: 48 }} />
      </div>
    );
  return (
    <div className={styles.container}>
      <Image src={logo} priority={true} alt="logo" className={styles.logo} />
      <div className={styles.rightContainer}>
        <CategoryButton />
        <Link href={"/setting"} className={styles.settingBtn}>
          <Image
            src={setting.src}
            width={20}
            height={20}
            priority={true}
            alt="setting"
          />
        </Link>
      </div>
    </div>
  );
}
