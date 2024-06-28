import { API_URL_BILLIONAIRS_PERSON } from "../app/constant";
import styles from "../styles/billionair.module.css";

export interface Person {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries?: string[] | null;
  financialAssets?: FinancialAssetsEntity[] | null;
  thumbnail: string;
  squareImage: string;
  bio?: string[] | null;
  about?: string[] | null;
  netWorth: number;
}
export interface FinancialAssetsEntity {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice: number;
  exerciseOptionPrice?: number | null;
}

export async function getBillionairInfo(id: string): Promise<Person> {
  const response = await fetch(`${API_URL_BILLIONAIRS_PERSON}${id}`);
  const json = await response.json();
  return json;
}

export default async function BillionairInfo({ id }: { id: string }) {
  const { squareImage, name, netWorth, industries, financialAssets, about } =
    await getBillionairInfo(id);
  return (
    <div className={styles.billionair}>
      <img src={squareImage} alt={name} />
      <h2>{name}</h2>
      <p>
        {Math.floor(netWorth / 1000)} Billions / Industries:{" "}
        {industries?.join(", ")}
      </p>
      <h3>Financial Assets</h3>
      <ul>
        {financialAssets?.map((asset) => (
          <li key={asset.ticker}>
            {asset.companyName} - {asset.numberOfShares} Shares -{" "}
            {asset.currentPrice} {asset.currencyCode}
          </li>
        ))}
      </ul>
      <p>{about}</p>
    </div>
  );
}
