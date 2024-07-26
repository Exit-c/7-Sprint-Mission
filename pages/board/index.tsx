import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Board.module.css";
import BestPost from "@/components/BestPost";
import SearchForm from "@/components/SearchForm";
import SelectBtn from "@/components/SelectBtn";
import GeneralPost from "@/components/GeneralPost";
import { getArticles } from "@/lib/api";
import { Article } from "@/lib/type";
import { Order } from "@/lib/type";
import { defaultOrderType, orderTypeKeys } from "@/constants/constants";
import useDevice from "@/hooks/useDevice";

const initialArticleState = {
  content: "",
  createdAt: "",
  id: 0,
  image: "",
  likeCount: 0,
  title: "",
  updatedAt: "",
  writer: {
    id: 0,
    nickname: "",
  },
};

export default function Board() {
  const router = useRouter();
  const keyword =
    typeof router.query.keyword === "string" ? router.query.keyword : undefined;
  const { isDesktop, isTablet, isMobile } = useDevice();
  const [order, setOrder] = useState<Order>(defaultOrderType);
  const [bestPageSize, setBestPageSize] = useState<number>(3);
  const [bestArticles, setBestArticles] = useState<Article[]>([
    initialArticleState,
  ]);
  const [generalArticles, setGeneralArticles] = useState<Article[]>([
    initialArticleState,
  ]);

  useEffect(() => {
    if (isDesktop) {
      setBestPageSize(3);
    } else if (isTablet) {
      setBestPageSize(2);
    } else if (isMobile) {
      setBestPageSize(1);
    }
  }, [isDesktop, isTablet, isMobile]);

  useEffect(() => {
    const getArticlesApi = async () => {
      const bestArticles = await getArticles(1, bestPageSize, defaultOrderType);
      const generalArticles = await getArticles(1, 10, order, keyword);

      setBestArticles(bestArticles.list);
      setGeneralArticles(generalArticles.list);
    };

    getArticlesApi();
  }, [bestPageSize, order, keyword]);

  return (
    <div className={styles.container}>
      <section className={styles["best-section"]}>
        <h2>베스트 게시글</h2>
        <div className={styles["bestpost-container"]}>
          {bestArticles.map((article) => (
            <Link href={`/board/${article.id}`}>
              <BestPost article={article} key={article.id} />
            </Link>
          ))}
        </div>
      </section>
      <section className={styles["general-section"]}>
        <div className={styles["top-wrap"]}>
          <h2>게시글</h2>
          <Link href="/addboard" className={styles["link"]}>
            <button type="button">글쓰기</button>
          </Link>
        </div>
        <div className={styles["middle-wrap"]}>
          <SearchForm />
          <SelectBtn
            order={order}
            setOrder={setOrder}
            options={orderTypeKeys}
          />
        </div>
        <div className={styles["bottom-wrap"]}>
          {generalArticles.map((article) => (
            <Link href={`/board/${article.id}`}>
              <GeneralPost article={article} key={article.id} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
