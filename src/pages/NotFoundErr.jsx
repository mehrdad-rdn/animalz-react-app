import { Container } from "react-bootstrap";
import MainLayout from "../layouts/MainLayout";

const NotFoundErr = () => {
  return (
    <MainLayout>
      <div className="bg-dark vh-100 d-flex align-items-center">
        <Container fluid="lg">
          <h1 className="text-center text-secondary display-1"> 404 </h1>
          <h1 className="text-center text-secondary display-1">
            {" "}
            Page Not Found{" "}
          </h1>
        </Container>
      </div>
    </MainLayout>
  );
};

export default NotFoundErr;
