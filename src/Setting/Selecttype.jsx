import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Action",
  "Adult",
  "Adventure",
  "Anime",
  "Chuyển sinh",
  "Cooking",
  "Comic",
  "Comedy",
  "Cổ đại",
  "Doujinshi",
  "Drama",
  "Đam mỹ",
  "Ecchi",
  "Fantasy",
  "Gender Bender",
  "Harem",
  "Historical",
  "Horror",
  "Josei",
  "Live action",
  "Manga",
  "Manhua",
  "Manhwa",
  "Martial Arts",
  "Mature",
  "Mecha",
  "Mystery",
  "Ngôn tình",
  "One shot",
  "Psychological",
  "Romance",
  "School Life",
  "Sci-Fi",
  "Seinen",
  "Shoujo",
  "Shoujo Ai",
  "Shounen",
  "Shounen Ai",
  "Slice of Life",
  "Smut",
  "Soft Yaoi",
  "Soft Yuri",
  "Sports",
  "Supernatural",
  "Tạp chí truyện tranh",
  "Thiếu nhi",
  "Tragedy",
  "Trinh thám",
  "Truyện scan",
  "Truyện màu",
  "Việt Nam",
  "Webtoon",
  "Xuyên không",
  "16+",
];

export default function MultipleSelectCheckmarks() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Type</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
