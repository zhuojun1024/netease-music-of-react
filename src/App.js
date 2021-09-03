import './App.less';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="app">
      <Layout class="layout-main">
        <Header class="layout-header">
          <div>
            <div class="logo"></div>
            <div class="action"></div>
            <div class="menu"></div>
          </div>
        </Header>
        <Content class="layout-content">
          content
          <Footer class="layout-footer">
            netease music of react © 2021 zhuojun1024
          </Footer>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
