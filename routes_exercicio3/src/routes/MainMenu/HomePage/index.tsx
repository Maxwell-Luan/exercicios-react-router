import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import TextArea from "../../../components/TextArea";

export default function HomePage() {
  const buttonDescription = "Ver promoção";
  const textAreaDescription = "Página inicial";

  return (
    <main id="ms-page-container">
      <TextArea description={textAreaDescription} />
      <Link to="/promotion-page">
        <Button description={buttonDescription} />
      </Link>
    </main>
  );
}
