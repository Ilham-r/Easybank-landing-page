import React from "react";
import {
  ArticleContent,
  ArticleContentWrap,
  ArticleImage,
  Articles,
  ArticleSubtitle,
  ArticlesWrap,
  ArticleTitle,
  Container,
  Title
} from "./ArticlesElements";
import { Plane, Restaurant, Confetti, Currency } from "../../images";
export default function Article() {
  return (
    <>
      <Container>
        <Title>Latest Articles</Title>
        <ArticlesWrap>
          <Articles>
            <ArticleImage src={Currency} alt="Currency" />
            <ArticleContentWrap>
              <ArticleSubtitle>By Claire Robinson</ArticleSubtitle>
              <ArticleTitle>
                Receive money in any currency with no fees
              </ArticleTitle>
              <ArticleContent>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </ArticleContent>
            </ArticleContentWrap>
          </Articles>
          <Articles>
            <ArticleImage src={Restaurant} alt="Restaurant" />

            <ArticleContentWrap>
              <ArticleSubtitle>By Wilson Hutton</ArticleSubtitle>
              <ArticleTitle>
                Treat yourself without worrying about money
              </ArticleTitle>
              <ArticleContent>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </ArticleContent>
            </ArticleContentWrap>
          </Articles>
          <Articles>
            <ArticleImage src={Plane} alt="plane" />

            <ArticleContentWrap>
              <ArticleSubtitle>By Wilson Hutton</ArticleSubtitle>
              <ArticleTitle>
                Take your Easybank card wherever you go
              </ArticleTitle>
              <ArticleContent>
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </ArticleContent>
            </ArticleContentWrap>
          </Articles>
          <Articles>
            <ArticleImage src={Confetti} alt="confettie" />

            <ArticleContentWrap>
              <ArticleSubtitle>By Claire Robinson</ArticleSubtitle>
              <ArticleTitle>
                Our invite-only Beta accounts are now live!
              </ArticleTitle>
              <ArticleContent>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </ArticleContent>
            </ArticleContentWrap>
          </Articles>
        </ArticlesWrap>
      </Container>
    </>
  );
}
