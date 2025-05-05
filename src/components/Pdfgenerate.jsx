import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import NotoSansDevanagari from "../assets/fonts/NotoSansDevanagari-VariableFont_wdth,wght.ttf";

// Register Hindi font
Font.register({
  family: "NotoSansDevanagari",
  src: NotoSansDevanagari,
});

// Color coding for sentiment
const ColorCode = {
  Positive: "#00c951",
  Negative: "#fb2c36",
  Neutral: "#d1d5dc",
};

// Styles
const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 12, fontFamily: "Helvetica" },
  section: { marginBottom: 20, display: "flex", alignItems: "center" },
  title: { fontSize: 35, marginBottom: 20 },
  watermark: {
    position: "absolute",
    top: "35%",
    right: "0%",
    opacity: 0.1,
    width: "50%",
  },
  header: { fontSize: 18},
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
    paddingVertical: 4,
    alignItems: "center",
  },
  tableHeader: {
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 2,
  },
  tableCell: {
    flex: 1,
    fontSize: 11,
  },
  cellIndex: {
    flex: 0.4,
    textAlign: "center",
  },
  image: {
    width: "100%",
    // height: 150,
    marginVertical: 10,
  },
  contentBlock: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  contentText: { fontSize: 12, lineHeight: 1.5 },
  hindiText: {
    fontFamily: "NotoSansDevanagari",
    fontSize: 12,
    lineHeight: 1.6,
    marginTop: 5,
    textAlign:"center"
  },
});

// PDF Component
export const ReportPDF = ({ reportName, logoUrl, newsDetails, description }) => (
  <Document>
    {/* Cover Page */}
    <Page style={styles.page}>
      <Image style={styles.watermark} src={logoUrl} />
      <View style={styles.section}>
        <Text style={styles.title}>{reportName}</Text>
        <Text style={{ color: "green" }}>{description}</Text>
      </View>
    </Page>

    {/* News Table */}
    <Page style={styles.page}>
      <Text style={styles.header}>News List</Text>
      <View style={[styles.tableRow, styles.tableHeader]}>
        <Text style={[styles.tableCell, styles.cellIndex]}>#</Text>
        <Text style={styles.tableCell}>Sentiment</Text>
        <Text style={styles.tableCell}>Language</Text>
      </View>

      {newsDetails.map((item, index) => (
        <View style={styles.tableRow} key={index}>
          <Text style={[styles.tableCell, styles.cellIndex]}>{index + 1}</Text>
          <Text style={[styles.tableCell, { color: ColorCode[item.sentiment || "Neutral"] }]}>
            {item.sentiment}
          </Text>
          <Text style={styles.tableCell}>{item.language}</Text>
        </View>
      ))}

    {newsDetails.map((item, index) => (
        <View style={styles.contentBlock}>
          <Text style={styles.header}>News #{index + 1}</Text>
          {item.image_path && <Image style={styles.image} src={'http://192.168.29.55/files/'+item.image_name} />}
          <Text style={styles.contentText}>
            <Text style={{ fontWeight: "bold" }}>Sentiment: </Text>
            <Text style={{ color: ColorCode[item.sentiment || "Neutral"] }}>{item.sentiment}</Text>
          </Text>
          <Text style={styles.contentText}>
            <Text style={{ fontWeight: "bold" }}>Language: </Text>
            {item.language}
          </Text>
          <Text style={[styles.contentText, { marginTop: 8 }]}>
            <Text style={{ fontWeight: "bold" }}>English Text:{"\n"}</Text>
            {item.english_text}
          </Text>
          <Text style={styles.hindiText}>
            <Text style={{ fontWeight: "bold" }}>Hindi Text:{"\n"}</Text>
            {item.hindi_text}
          </Text>
        </View>
    ))}
    </Page>
  </Document>
);
