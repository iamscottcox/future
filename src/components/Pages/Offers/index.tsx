import { AppDispatch, AppState } from "src/store";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { FC, useEffect } from "react";

import { Page } from "src/components/Pages/Page";
import { connect } from "react-redux";
import { fetchData } from "src/actions/data";
import { getOffersDataTableData } from "src/selectors/offers";

interface StateProps {
  offers: ReturnType<typeof getOffersDataTableData>;
}

interface DispatchProps {
  fetchData: () => void;
}

type Props = StateProps & DispatchProps;

export const OffersPage: FC<Props> = ({ offers, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Page className="offers-page">
      <Typography variant="h4">Offers</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="offers table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Merchant</TableCell>
              <TableCell>Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {offers.map(
              ({
                currency,
                id,
                imgUrl,
                name,
                merchantLogo,
                merchantName,
                merchantUrl,
                price,
              }) => (
                <TableRow key={id}>
                  <TableCell>{name}</TableCell>
                  <TableCell>
                    {currency} {price}
                  </TableCell>
                  <TableCell>
                    <img src={merchantLogo} alt={merchantName} />
                    <a href={merchantUrl}>{merchantName}</a>
                  </TableCell>
                  <TableCell>
                    <img src={imgUrl} alt={name} />
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Page>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  offers: getOffersDataTableData(state),
});

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  fetchData() {
    dispatch(fetchData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OffersPage);
