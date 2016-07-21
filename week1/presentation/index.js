// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  Table,
  TableItem,
  TableRow,
  TableHeaderItem
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  darren: require("../assets/darren.jpg"),
  browser: require("../assets/browser.jpg"),
  server: require("../assets/server.jpg"),
  ruby: require("../assets/ruby.jpg"),
  trend: require("../assets/trend.png"),
  backend: require("../assets/backend.png"),
  web: require("../assets/web.png"),
  box: require("../assets/box-model.gif"),
  dom: require("../assets/dom.svg")
};

preloader(images);

const theme = createTheme({
  primary: "#29B6F6"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              WEB PROGRAMMING
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">Web發展/ javascript/ DOM</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Layout>
              <Fill>
                <Image src={images.darren.replace("/", "")} margin="0px auto 40px" height="293px"/>
                <Text textSize="2.5em" margin="20px 0px 0px" bold textColor="white">黃意堯</Text>
              </Fill>
              <Fill>
                <List>
                  <ListItem>
                    <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">Senior student in NTUEE</Text>
                  </ListItem>
                  <ListItem>
                    <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">AI</Text>
                  </ListItem>
                  <ListItem>
                    <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">Web Programming</Text>
                  </ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              什麼是Web
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.browser.replace("/", "")} margin="0px auto 40px" height="400px"/>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">前端</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">使用者看到的畫面</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.server.replace("/", "")} margin="0px auto 40px" height="400px"/>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">後端</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">處理資料反應</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">小學上資訊課時，老師都教我們用dreamweaver開發網頁</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">那個時候的Fashion就是</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">各種卡通圖案的游標</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">會閃爍的跑馬燈</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">紀錄來訪人數的計數器</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">後來漸漸出現動態網頁</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">可以查詢資料庫、記錄使用者</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">好像都是用什麼P做出來的，JSP, PHP, ASP</Text>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">用PHP做的facebook</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="3em" margin="20px 0px 0px" bold textColor="white">Ruby on Rail出現</Text>
            <Image src={images.ruby.replace("/", "")} margin="20px auto 20px" height="400px"/>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">席捲網頁開發</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">哲學</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">1. Don't Repeat Yourself</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">2. Convention Over Configuration</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">3. RESTFUL</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">4. Test Driven Development</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">雖然現在Ruby on Rail已經不在浪頭上了，但還是大大影響後續網頁語言的發展</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">Client Server Render 技術</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">問題：</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">1. 資訊越來越複雜</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">2. 動不動就破萬行，bug滿天飛</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">3. Template 前後端不易共用</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">4. 前端重複code太多，需要一些MVX架構</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">解決方法：</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">1. 讓javascript 來負責顯示畫面</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">2. 全面使用Ajax並使用一些架構模式</Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="white">3. 伺服器則變成API server</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">前端框架風向</Text>
            <Image src={images.trend.replace("/", "")} margin="20px auto 40px" height="400px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">後生可畏</Text>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">1. Vue.js</Text>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">2. elm.js</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">後端百花齊放</Text>
            <Image src={images.backend.replace("/", "")} margin="20px auto 40px" height="400px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">本次讀書會的脈絡</Text>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">1. React.js</Text>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">2. NodeJs</Text>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">3. 任何web相關的技巧與library</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">週間可以約1~2天的hack day，做作業和做Project</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.web.replace("/", "")} margin="20px auto 40px" height="600px"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">html</Text>
            <CodePane
              lang="html"
              textSize="0.8em"
              source={require("raw!../assets/html1.example")}
              margin="0px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">&lt;img&gt; 圖片</Text>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">&lt;div&gt; 區塊</Text>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">&lt;a&gt; 連結</Text>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">&lt;table&gt; 表格</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <CodePane
              lang="html"
              textSize="0.8em"
              source={require("raw!../assets/html2.example")}
              margin="0px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="0px 0px 0px" bold textColor="white">CSS</Text>
            <CodePane
              lang="html"
              textSize="0.8em"
              source={require("raw!../assets/css1.example")}
              margin="0px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              插入CSS有多種方式
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Appear>
              <CodePane
                lang="html"
                textSize="0.8em"
                source={require("raw!../assets/css2.example")}
                margin="0px auto"
              />
            </Appear>
            <Appear fid="2">
             <Text textSize="2em" margin="20px 0px 0px" bold textColor="red">沒事別這樣做！</Text>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="0px 0px 0px" bold textColor="white">主流作法</Text>
            <CodePane
              lang="html"
              textSize="0.8em"
              source={require("raw!../assets/css3.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              CSS reset
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              千萬不要衝動直接寫，要不然每個瀏覽器都會長不一樣
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              normalize.css
            </Heading>
            <Text textSize="2em" margin="0px 0px 0px" bold textColor="white">CSS界最偉大的發明之一</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="0px 0px 0px" bold textColor="white">cdn插入</Text>
            <CodePane
              lang="html"
              textSize="0.8em"
              source={require("raw!../assets/css4.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="0px 0px 0px" bold textColor="white">CSS用法</Text>
            <CodePane
              lang="css"
              textSize="0.8em"
              source={require("raw!../assets/css5.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="0px 0px 0px" bold textColor="white">tag selector</Text>
            <CodePane
              lang="css"
              textSize="0.8em"
              source={require("raw!../assets/css6.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Text textSize="2em" margin="0px 0px 0px" bold textColor="white">class selector</Text>
            <CodePane
              lang="css"
              textSize="0.8em"
              source={require("raw!../assets/css7.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Text textSize="2em" margin="0px 0px 0px" bold textColor="white">id selector</Text>
            <CodePane
              lang="css"
              textSize="0.8em"
              source={require("raw!../assets/css8.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Text textSize="2em" margin="0px 0px 0px" bold textColor="white">Select Priority</Text>
            <Text textSize="2em" margin="0px 0px 0px" bold textColor="white">style &gt; id &gt; class &gt; tag </Text>
          </Slide>
          <Slide>
            <Text textSize="2em" margin="0px 0px 0px" bold textColor="white">CSS 基本元素</Text>
            <Text textSize="2em" margin="0px 0px 0px" bold textColor="white">超多，很多不知道在幹麻，但不重要</Text>
          </Slide>
          <Slide>
            <List>
              <Text textSize="2em" margin="0px 0px 0px" bold textColor="black">長寬</Text>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">width</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">height</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">min-width</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">min-height</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">max-width</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">max-height</Text>
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <List>
              <Text textSize="2em" margin="0px 0px 0px" bold textColor="black">字型</Text>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">color</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">font-size</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">line-height</Text>
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <List>
              <Text textSize="2em" margin="0px 0px 0px" bold textColor="black">字型</Text>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">background-color</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">Background-image</Text>
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Text textSize="2em" margin="0px 0px 0px" bold textColor="black">Inline 跟 block的差別</Text>
          </Slide>
          <Slide>
            <Text textSize="2em" margin="0px 0px 0px" bold textColor="white">長度的算法</Text>
            <Image src={images.box.replace("/", "")} margin="20px auto 40px" height="400px"/>
          </Slide>
          <Slide>
            <List>
              <Text textSize="2em" margin="0px 0px 0px" bold textColor="black">RWD(Responsive Web Design)</Text>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">用%取代px</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">用em, rem表示字體大小</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">用media query可以針對不同大小的螢幕</Text>
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              javascript
            </Heading>
          </Slide>
          <Slide>
            <Table>
              <TableRow>
                <TableHeaderItem>型別</TableHeaderItem>
                <TableHeaderItem>範例值</TableHeaderItem>
              </TableRow>
              <TableRow>
                <TableItem>Undefined</TableItem>
                <TableItem>Undefined</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Null</TableItem>
                <TableItem>null</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>String</TableItem>
                <TableItem>"hello"</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Boolean</TableItem>
                <TableItem>true, false</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Number</TableItem>
                <TableItem>1.23456</TableItem>
              </TableRow>
            </Table>
          </Slide>
          <Slide>
            <Table>
              <TableRow>
                <TableHeaderItem>型別</TableHeaderItem>
                <TableHeaderItem>範例值</TableHeaderItem>
              </TableRow>
              <TableRow>
                <TableItem>Object</TableItem>
                <TableItem>&#123;name: darren, age: 21}</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Array</TableItem>
                <TableItem>[1,2,true]</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Date</TableItem>
                <TableItem>new Date()</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>RegExp</TableItem>
                <TableItem>/\.css$/</TableItem>
              </TableRow>
            </Table>
          </Slide>
          <Slide>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">變數的定義用var</Text>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">函式用function</Text>
          </Slide>
          <Slide>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">var vs let vs const</Text>
          </Slide>
          <Slide>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">for, case, if等等跟c++差不多</Text>
          </Slide>
          <Slide>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">DOM</Text>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">文件物件模型 (Document Object Model, DOM)</Text>
          </Slide>
          <Slide>
            <Text textSize="2em" margin="0px 0px 0px" bold textColor="white">DOM像是一棵樹</Text>
            <Image src={images.dom.replace("/", "")} margin="20px auto 40px" height="400px"/>
          </Slide>
          <Slide>
            <Text textSize="2em" margin="0px 0px 0px" bold textColor="white">如何在html使用javascript</Text>
            <CodePane
              lang="html"
              textSize="0.8em"
              source={require("raw!../assets/javascript1.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Text textSize="2em" margin="0px 0px 0px" bold textColor="white">主流</Text>
            <CodePane
              lang="html"
              textSize="0.8em"
              source={require("raw!../assets/javascript2.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <List>
              <Text textSize="2em" margin="0px 0px 0px" bold textColor="black">選擇DOM物件</Text>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">document.getElementById(id)</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">document.getElementsByClassName(className)</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">document.getElementsByTagName(tagName)</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">document.querySelector(selectors)</Text>
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <List>
              <Text textSize="2em" margin="0px 0px 0px" bold textColor="black">DOM Node物件</Text>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">Node.parentNode</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">Node.firstChild</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">Node.lastChild</Text>
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <List>
              <Text textSize="2em" margin="0px 0px 0px" bold textColor="black">建立DOM Node</Text>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">document.createElement(tagName)</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">document.createTextNode(text)</Text>
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <CodePane
              lang="javascript"
              textSize="0.8em"
              source={require("raw!../assets/javascript3.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <List>
              <Text textSize="2em" margin="0px 0px 0px" bold textColor="black">移除DOM Node</Text>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">Node.removeChild(childNode)</Text>
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <CodePane
              lang="javascript"
              textSize="0.8em"
              source={require("raw!../assets/javascript4.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <List>
              <Text textSize="2em" margin="0px 0px 0px" bold textColor="black">插入DOM Node</Text>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">Element.innerHTML = htmlString</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">Node.appendChild(node)</Text>
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <CodePane
              lang="javascript"
              textSize="0.8em"
              source={require("raw!../assets/javascript5.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <List>
              <Text textSize="2em" margin="0px 0px 0px" bold textColor="black">改變style, className</Text>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">HTMLElement.style</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">Element.className</Text>
              </ListItem>
              <ListItem>
                <Text textSize="1em" margin="20px 0px 0px" bold textColor="black">Element.classList</Text>
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <CodePane
              lang="javascript"
              textSize="0.8em"
              source={require("raw!../assets/javascript6.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">事件</Text>
          </Slide>
          <Slide>
            <Table>
              <TableRow>
                <TableHeaderItem>名稱</TableHeaderItem>
                <TableHeaderItem>發生處理狀況</TableHeaderItem>
              </TableRow>
              <TableRow>
                <TableItem>click</TableItem>
                <TableItem>點擊</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>dbclick</TableItem>
                <TableItem>連點兩次的時候</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>focus</TableItem>
                <TableItem>開始在輸入框輸入的時候</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>blur</TableItem>
                <TableItem>離開輸入框</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>change</TableItem>
                <TableItem>輸入值改變</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>keydown</TableItem>
                <TableItem>按鍵按下去</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>keyup</TableItem>
                <TableItem>按鍵按下去上來時</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>mouseenter</TableItem>
                <TableItem>滑鼠滑到元素裡時</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>mouseleave</TableItem>
                <TableItem>滑鼠滑出元素裡時</TableItem>
              </TableRow>
            </Table>
          </Slide>
          <Slide>
            <CodePane
              lang="javascript"
              textSize="0.8em"
              source={require("raw!../assets/javascript8.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">下週進度</Text>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">hackday</Text>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">1. CSS3, bootstrap, materialize)</Text>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">2. jQuery</Text>
            <Text textSize="2em" margin="20px 0px 0px" bold textColor="white">3. Advance javascript</Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
