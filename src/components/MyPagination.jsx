import { Pagination } from "@material-ui/lab";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const MyPagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = Math.ceil(totalProducts / productsPerPage);
  return (
    <Container>
      <Pagination
        count={pageNumbers}
        variant="outlined"
        onChange={(e, page) => paginate(page)}
      />
    </Container>
  );
};

export default MyPagination;
