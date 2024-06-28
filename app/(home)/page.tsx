import Billionair from "../../components/billionair";
import styles from "../../styles/home.module.css";
import { API_URL_BILLIONAIRS } from "../constant";

export interface Billions {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries?: string[] | null;
}

async function getBillionairs(): Promise<Billions[]> {
  const response = await fetch(API_URL_BILLIONAIRS);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const billionairs = await getBillionairs();
  return (
    <div className={styles.container}>
      {billionairs.map((billionair) => (
        <Billionair billionair={billionair} key={billionair.id} />
      ))}
    </div>
  );
}
