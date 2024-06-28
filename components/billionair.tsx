"use client";

import Link from "next/link";
import styles from "../styles/billionair.module.css";
import { useRouter } from "next/navigation";

export interface billions {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries?: string[] | null;
}

export default function Billionair({
  billionair: { id, name, squareImage, netWorth, industries },
}: {
  billionair: billions;
}) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/person/${id}`);
  };
  return (
    <div className={styles.billionair}>
      <img src={squareImage} alt={name} onClick={onClick} />
      <Link href={`/person/${id}`}>
        <h2>{name}</h2>
        <p>
          {Math.floor(netWorth / 1000)} Billions / Industries:{" "}
          {industries?.join(", ")}
        </p>
      </Link>
    </div>
  );
}
