import SectionTitle from "../components/Layout/SectionTitle/SectionTitle";
import styles from "../styles/page.module.scss";
import CatalogRow from "../components/Features/CatalogRow/CatalogRow";

function Catalog() {
  const smallBox = "415px";
  const bigBox = "846px";

  return (
    <div className={styles.box}>
      <SectionTitle content="Catálogo" />
      <CatalogRow />
    </div>
  );
}

export default Catalog;
