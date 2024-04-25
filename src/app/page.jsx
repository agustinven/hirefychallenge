import CountrySearch from "@/components/Search/CountrySearch";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const loadData = async () => {
  const { data } = await getClient().query({
    query: gql`
      query {
        countries {
          code
          name
          capital
          native
          phone
          currency
          languages {
            code
            name
            native
            rtl
          }
          emoji
          emojiU
          states {
            code
            name
          }
        }
      }
    `,
  });

  return data.countries;
};

const App = async () => {
  const countries = await loadData();
  return (
    <div className="container mx-auto px-8 md:px-0">
      <CountrySearch countries={countries} />
    </div>
  );
};

export default App;
