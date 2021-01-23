import React, { FC } from "react";
import { Typography, makeStyles } from "@material-ui/core";

import Header from "src/components/Header";
import styled from "styled-components";
import { theme } from "src/theme";

const useStyles = makeStyles((theme) => ({
  pageTitleStyles: {
    paddingBottom: theme.spacing(4),
  },
}));

const Inner = styled.div`
  max-width: 1080px;
  min-height: 100%;
  margin: 0 auto;
  padding-top: 100px;
`;

const StyledPage = styled.div`
  background: ${theme.palette.background.default};
  color: ${theme.palette.text.primary};
  min-height: 100vh;
`;

interface PageTitleProps {
  title?: string;
}

interface PageProps extends PageTitleProps {
  className?: string;
}

const PageTitle: FC<PageTitleProps> = ({ title }) => {
  const { pageTitleStyles } = useStyles();
  return title ? (
    <Typography className={pageTitleStyles} variant="h4">
      {title}
    </Typography>
  ) : null;
};

export const Page: FC<PageProps> = ({ className, title, children }) => (
  <StyledPage className={className}>
    <Header />
    <Inner>
      <PageTitle title={title} />
      {children}
    </Inner>
  </StyledPage>
);

export default Page;
