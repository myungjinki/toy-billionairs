import BillionairInfo from "../../../../components/billionair-info";

interface IParams {
  params: {
    id: string;
  };
}

export default async function PersonPage({ params: { id } }: IParams) {
  return (
    <div>
      <BillionairInfo id={id} />
    </div>
  );
}
