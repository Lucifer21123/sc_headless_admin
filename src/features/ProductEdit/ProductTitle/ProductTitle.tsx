//! import style

import { useState, useEffect } from "react";
import {
  styleProperty,
  MaxText,
  SingleFormContainer,
  SeasonTitleBox,
  SeasonTitleBoxOther,
  MembersForm,
  SeanonTitleBoxContainer,
  SelectBefore,
  MemversTagForm,
} from "./ProductTitle.style";

//! import components
import FormLabel from "components/FormLabel/index";
import CountInput from "components/CountInput";
import CountTextArea from "components/CountTextarea";
import Select from "components/Select";
import dynamic from "next/dynamic";
import isEmpty from "utils/is-empty";
//! import apollo
import { initializeApollo } from "utils/apollo-client";
import { GET_AGEBRACKET } from "graphql/query/products.query";

const MultipleOptionSelect = dynamic(
  () =>
    import("components/MultipleOptionSelect/index").then(
      (module) => module.default
    ),
  {
    ssr: false,
  }
);

const linkedStores = [
  {
    id: 1,
    label: "No data",
  },
];

const ProductTitle = ({ data, onChange, ageBracket }) => {
  const [title, settitle] = useState(data.title);
  const [description, setdescription] = useState(data.open_graph.description);
  const [titleSectiondata, settitleSectiondata] = useState({
    title: data.title,
    description: data.open_graph.description,
    ageBracket: ageBracket,
    marketingTag: "",
  });
  const [ageBracket_h, setAgeBracket] = useState([]);

  const apolloClient = initializeApollo();
  useEffect(() => {
    apolloClient
      .query({
        query: GET_AGEBRACKET,
      })
      .then(async (res) => {
        console.log(res);
        let temp = [];
        await res.data.ageBracket.data.map((item, key) => {
          temp.push({ id: item.key, label: item.value });
        });
        setAgeBracket(temp);
      });
  }, []);

  const onTitleChange = (value) => {
    settitle(value);
    let temp = titleSectiondata;
    temp.title = value;
    settitleSectiondata(temp);
  };
  const onDescriptionChange = (value) => {
    setdescription(value);
    let temp = titleSectiondata;
    temp.description = value;
    settitleSectiondata(temp);
  };
  const onSelect = (item) => {
    let temp = titleSectiondata;
    temp.ageBracket = item.id;
    settitleSectiondata(temp);
  };

  let content;
  if (isEmpty(ageBracket_h)) {
    content = (
      <Select click={onSelect} label={"No data"} list={linkedStores}></Select>
    );
  } else {
    let label = ageBracket_h.filter(
      (item, key) => parseInt(item.id) == ageBracket
    )[0].label;
    content = (
      <Select click={onSelect} label={label} list={ageBracket_h}></Select>
    );
  }
  return (
    <SeasonTitleBox id="1">
      <SeanonTitleBoxContainer>
        <SingleFormContainer>
          <FormLabel styleproperty={styleProperty}>Title</FormLabel>
          <CountInput
            val={title}
            maxLength={120}
            placeholder="product title"
            onChange={onTitleChange}
          ></CountInput>
        </SingleFormContainer>
        <MaxText>
          <FormLabel styleproperty={styleProperty}>Short description</FormLabel>
          <CountTextArea
            placeholder={"Type here"}
            maxlength={255}
            val={description}
            onChange={onDescriptionChange}
          ></CountTextArea>
        </MaxText>
      </SeanonTitleBoxContainer>
      <SeasonTitleBoxOther>
        <p>
          Displayed on product page, Splitchek search and to other search
          engines
        </p>
        <h5>demographics</h5>
        <MembersForm>
          <FormLabel styleproperty={styleProperty}>Age bracket</FormLabel>
          <SelectBefore>{content}</SelectBefore>
        </MembersForm>
        <MemversTagForm>
          <FormLabel styleproperty={styleProperty}>Marketing tags</FormLabel>
          <MultipleOptionSelect></MultipleOptionSelect>
        </MemversTagForm>
        <p>
          These tags are displayed to shoppers and must be relevant to them.
          e.g. Vegan Friendly, Gluten Free, GST Free, Organic
        </p>
      </SeasonTitleBoxOther>
    </SeasonTitleBox>
  );
};

export default ProductTitle;
