import {
  ImagesBoxLoader,
  SortableDragImg,
  ColumnSortDrag,
} from "./index.style";
//! component
import { ReactSortable } from "react-sortablejs";
import { useState } from "react";
const ProductImage = () => {
  const [list, setList] = useState([
    {
      id: "1",
      backgroundImg: "",
    },
    {
      id: "2",
      backgroundImg: "",
    },
    {
      id: "3",
      backgroundImg: "",
    },
    {
      id: "4",
      backgroundImg: "",
    },
    {
      id: "5",
      backgroundImg: "",
    },
    {
      id: "6",
      backgroundImg: "",
    },
    {
      id: "7",
      backgroundImg: "",
    },
    {
      id: "8",
      backgroundImg: "",
    },
    {
      id: "9",
      backgroundImg: "",
    },
  ]);
  return (
    <ImagesBoxLoader>
      <strong>Images</strong>
      <ColumnSortDrag>
        <ReactSortable list={list} setList={setList} tag="ul">
          {list.map((item, key) => {
            return (
              <SortableDragImg
                key={key}
                backgroundImg={item.backgroundImg}
              ></SortableDragImg>
            );
          })}
        </ReactSortable>
      </ColumnSortDrag>
    </ImagesBoxLoader>
  );
};

export default ProductImage;
