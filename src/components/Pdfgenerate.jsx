import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Styles for PDF
const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 12, fontFamily: "Helvetica" },
  section: { marginBottom: 20,display:'flex',alignItems:"center" },
  title: { fontSize: 35, marginBottom: 20 },
  watermark: {
    position: "absolute",
    top: "35%",
    right: "0%",
    opacity: 0.1,
    width: "50%",
  },
  newsItem: { marginBottom: 10 },
  header: { fontSize: 18, marginBottom: 10 },
  contentText: { fontSize: 12, lineHeight: 1.5 },
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
});

// PDF Document Component
const ReportPDF = ({ reportName, logoUrl, newsList, newsDetails }) => (
  <Document>
    {/* Cover Page */}
    <Page style={styles.page}>
      <Image style={styles.watermark} src={logoUrl} />
      <View style={styles.section}>
        <Text style={styles.title}>{reportName}</Text>
        <Text style={{color:'green'}}>Generated Report</Text>
      </View>
    </Page>

    {/* News List Section */}
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>News List</Text>
        {newsList.map((title, i) => (
          <Text key={i} style={styles.newsItem}>• {title}</Text>
        ))}
        {newsDetails.map((item, i) => (
          <View key={i} style={{ marginBottom: 15 }}>
            <Text style={styles.bold}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum rem fugiat impedit facilis quos, dolore voluptatibus ut non error nisi neque quas vel minima, architecto perferendis quisquam odio provident nobis reiciendis possimus voluptates quo aut in pariatur! Sint molestiae quidem tenetur eum cumque minus, mollitia sequi voluptatem itaque error ratione consequatur dolore accusamus tempore qui consectetur aperiam. Doloribus accusantium quisquam maxime aliquid est in, totam, incidunt iste fugit perspiciatis, voluptas magni quis hic molestias illum numquam quidem repellendus quo earum? Quod, consectetur. Aspernatur accusamus aut ipsa ducimus velit blanditiis sequi deserunt exercitationem ad voluptas eveniet quos aliquid, distinctio dolor consectetur enim doloremque nihil quae, voluptatum tempore? Temporibus aliquid deserunt illo, accusantium libero dolores blanditiis debitis ad cupiditate quasi dolor fugiat veniam perspiciatis voluptate maxime ab quam possimus perferendis necessitatibus est, officiis praesentium ea. Placeat quibusdam cum nostrum itaque, repellat error dolores dolorum. Ex voluptate veniam omnis labore quidem praesentium fugiat, eaque fuga inventore dolore dolorem ut impedit animi possimus quas voluptatibus facere recusandae rem necessitatibus tempore commodi vel? Earum quidem tempore officia labore quibusdam hic unde tempora nemo iusto numquam quis, illo veniam, velit in molestias incidunt ratione! Facere eligendi in accusantium cumque recusandae harum molestiae ullam nemo deleniti quis iure sit nesciunt temporibus consequuntur nostrum reiciendis molestias exercitationem saepe neque tempore aliquam, odio fugiat rerum animi. Ex facere impedit laudantium ipsam vitae velit quaerat sit dicta vero, deleniti voluptate dolores maxime mollitia libero, odio quis. Excepturi rerum accusamus qui ullam repudiandae odit, illo quas dolores atque fugit. Totam aliquam delectus, quaerat saepe ipsam assumenda dolorem ducimus sequi fugit vitae provident magnam non recusandae eos facere! Dicta eos deleniti alias in libero quibusdam voluptatum laborum aperiam, obcaecati sunt ex! Magnam eius minima impedit. Modi veritatis excepturi quisquam, ad nihil dignissimos rem sapiente laborum quae facilis deserunt ipsa delectus maiores doloribus, repellat nesciunt consequuntur animi illum necessitatibus quas eveniet ea! Dolorum quia, beatae non tempora nihil assumenda. Quibusdam dignissimos est quo tempore non. Minima est accusamus fugiat nam qui. Vero hic, itaque blanditiis temporibus odit nesciunt quasi eos, aliquid eveniet at fugit cupiditate est quo voluptas cumque perspiciatis ea enim officia numquam, voluptatibus harum! Incidunt quod iusto nisi non dolore repellendus odit cupiditate, maiores perferendis reprehenderit laborum vel quasi autem perspiciatis praesentium eius a obcaecati libero eaque ab rerum alias. Deleniti unde excepturi quam ratione aliquid enim officiis repudiandae minima cum. Iste vero ab ut asperiores similique. Accusantium non eos voluptatibus, dicta, eaque delectus magnam fuga vitae sit amet minima commodi maxime quisquam voluptate fugit praesentium similique enim. Excepturi ducimus laborum iusto eligendi quam quisquam voluptatum sunt minima obcaecati placeat, totam culpa ut officia explicabo repudiandae, earum eos quae aliquam cumque pariatur! Repellat quo excepturi voluptates. Eveniet nihil nobis delectus ipsam dolor architecto dolorum totam, reprehenderit eligendi atque quo alias inventore dolore hic quia labore expedita? Perspiciatis dolore asperiores cum doloremque pariatur nesciunt, voluptatem dignissimos? Veniam atque sunt provident maxime voluptatum voluptatibus accusantium, laborum veritatis ullam adipisci odio ex, laboriosam obcaecati quam quaerat sint rem nobis, eaque quidem ad perspiciatis. Aut corrupti, doloremque, sit ratione magnam praesentium eligendi ipsa necessitatibus aperiam eaque nemo quisquam aspernatur? Distinctio odit, repudiandae, sunt consequuntur alias culpa neque ad praesentium numquam vero quidem minus in fugit eveniet dicta quas quo molestias? Consequuntur minima nesciunt reprehenderit beatae repellat cumque voluptatem vitae aliquid vel rem quibusdam doloribus odit dicta, asperiores architecto tenetur corrupti, atque, earum laboriosam dolore harum! Accusamus repellendus atque perferendis eligendi nobis tempora. Tempore fuga nemo quis odit quod eum alias autem quasi eaque at. Facere quam magni, expedita ut optio atque est nostrum itaque pariatur ea animi inventore quibusdam vitae unde deserunt aliquam, quo nulla?
            </Text>
            <Text style={styles.italic}>Summary: {item.summary}</Text>
            <Text style={styles.contentText}>{item.content}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

// Main Component with Checkbox Table
const ReportPDFGenerator = () => {
  const allNews = [
    {
      id: 1,
      title: "News 1 Title",
      summary: "A brief overview of News 1.",
      content: "Full content of News 1...",
    },
    {
      id: 2,
      title: "News 2 Title",
      summary: "A brief overview of News 2.",
      content: "Full content of News 2...",
    },
    {
      id: 3,
      title: "News 3 Title",
      summary: "A brief overview of News 3.",
      content: "Full content of News 3...",
    },
  ];

  const [selectedNews, setSelectedNews] = useState([]);

  const toggleNewsSelection = (newsItem) => {
    setSelectedNews((prev) =>
      prev.find((item) => item.id === newsItem.id)
        ? prev.filter((item) => item.id !== newsItem.id)
        : [...prev, newsItem]
    );
  };

  const isChecked = (id) => selectedNews.some((item) => item.id === id);

  const reportName = "April News Report";
  const logoUrl = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div style={{ padding: "20px" }}>
      <h2>Select News to Generate Report</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>Select</th>
            <th>Title</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {allNews.map((news) => (
            <tr key={news.id}>
              <td>
                <input
                  type="checkbox"
                  checked={isChecked(news.id)}
                  onChange={() => toggleNewsSelection(news)}
                />
              </td>
              <td>{news.title}</td>
              <td>{news.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedNews.length > 0 && (
        <PDFDownloadLink
          document={
            <ReportPDF
              reportName={reportName}
              logoUrl={logoUrl}
              newsList={selectedNews.map((n) => n.title)}
              newsDetails={selectedNews}
            />
          }
          fileName={reportName}
        >
          {({ loading }) =>
            loading ? "Generating PDF..." : <button>Download Selected Report</button>
          }
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default ReportPDFGenerator;
