import NavHeader from "@/components/NavHeader";
import { routeConfig } from "@/router";
import { rStore, userZstore } from "@/store";
import { Button, Layout } from "antd";
import { useRoutes } from "react-router-dom";
const { Sider, Header, Content, Footer } = Layout
const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#fff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  backgroundColor: '#fff',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  backgroundColor: '#fff',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  backgroundColor: '#fff',
};

const layoutStyle = {
  height: "100%",
};
export default function Login() {

  const zState = userZstore()
  const curRouters = useRoutes(routeConfig as any)

  return <Layout style={layoutStyle}>
    <Sider width="25%" style={siderStyle}>
      <NavHeader />
    </Sider>
    <Layout>
      <Header style={headerStyle}>{rStore.count}/{zState.num}</Header>
      <Content style={contentStyle}>
        <Button onClick={() => {
          rStore.inc()
        }}>add</Button>
        <Button onClick={() => {
          zState.updateNum()
        }}>zAdd</Button>
        {curRouters}
      </Content>
      {/* <RouterProvider router={createBrowserRouter(routers)} /> */}
      {/* <ConfigProvider>
      </ConfigProvider> */}
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Layout>
}
