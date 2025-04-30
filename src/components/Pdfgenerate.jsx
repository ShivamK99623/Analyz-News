import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
const ColorCode = {
  Positive: '#00c951',
  Negative: '#fb2c36',
  Neutral: "#d1d5dc"
}
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
export const ReportPDF = ({ reportName, logoUrl, newsList, newsDetails }) => (
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
            <Text style={{color:ColorCode[item.sentiment]}}>
              {item.sentiment}
            </Text>
            <Text style={styles.italic}>Summary: {item.summary}</Text>
            <Text style={styles.contentText}>{item.content}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

// Main Component with Checkbox Tab
