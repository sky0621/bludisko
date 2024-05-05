import { Col, Image, Row } from "antd";
import { Header } from "@/app/_components/Header";
import { Content } from "@/app/_components/Content";
import { Layout } from "@/app/_components/Layout";

const Home = () => {
  const base = "https://res.cloudinary.com/duqsypqgi/image/upload/";
  const images = [
    base + "v1714702479/IMG_20240503_105513_zwrcqs.jpg",
    base + "v1714702480/IMG_20240503_105345_tkvhre.jpg",
    base + "v1714702480/IMG_20240503_105557_gfgvqz.jpg",
    base + "v1714702480/IMG_20240503_105656_yhswl9.jpg",
    base + "v1714702480/IMG_20240503_105619_hzjges.jpg",
    base + "v1714702483/IMG_20240503_105716_dhyy3m.jpg",
  ];

  return (
    <main>
      <Layout>
        <Header>
          Maze
          <span
            style={{
              fontWeight: "normal",
              fontSize: "0.8em",
              paddingLeft: "4px",
            }}
          >
            〜 Let&apos;s try! 〜
          </span>
        </Header>
        <Content>
          <Row>
            {images.map((image, index) => (
              <Col
                key={index}
                xs={{ flex: "100%" }}
                sm={{ flex: "50%" }}
                md={{ flex: "40%" }}
                lg={{ flex: "20%" }}
                xl={{ flex: "10%" }}
              >
                <Image src={image} alt={image} />
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </main>
  );
};

export default Home;
