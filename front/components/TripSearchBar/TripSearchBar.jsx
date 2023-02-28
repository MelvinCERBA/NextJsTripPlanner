import { Input, Divider } from "..";

export const TripSearchBar = () => {
  return (
    <div className="rounded-xl shadow-2xl px-10 py-5 flex flex-row gap-4 flex-wrap">
      <Input label="Chercher" placeholder="Restaurant, Hôtels, Aéroport" className="basis-2/12" />
      <Input label="Où ?" placeholder="Lyon" className="basis-3/12" />
      <Input label="Rayon (en km)" placeholder="20" className="basis-2/12" />
      <Divider className="mx-5" />
    </div>
  );
}
