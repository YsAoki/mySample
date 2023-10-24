import React, { FC, useEffect, useState } from "react";
import { SForm, SInner, STitleText } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { closeSearchModal } from "../../../store/viewModeSlice";
import RegularButton from "../../01atoms/RegularButton";
import { RootState } from "../../../store/store";
import FlexBox from "../../01atoms/FlexBox";
import RegularInput from "../../01atoms/RegularInput";
import RegularText from "../../01atoms/RegularText";
import RadioButton from "../../01atoms/RadioButton";
import CheckBox from "../../01atoms/CheckBox";

const SearchForm: FC = ({ ...other }) => {
  const dispatch = useDispatch();

  const searchModalCloseEvent = () => {
    dispatch(closeSearchModal());
  };

  const searchModalSwitch = useSelector(
    (state: RootState) => state.viewMode.searchModalSwitch
  );

  const defaultState = {
    matchStart: 0,
    matchEnd: 999999999999999,
  }

  const [startPrice, setStartPrice] = useState(0);
  const onChangeStartPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartPrice(Number(e.target.value));
  };

  const defaultEndNumber = 99999999999999;
  const [endPrice, setEndPrice] = useState(defaultEndNumber);
  const onChangeEndPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndPrice(Number(e.target.value));
  };

  const isValid = Number(startPrice) > Number(endPrice);

  const [startDate, setStartDate] = useState("");
  const [startDateSeconds, setStartDateSeconds] = useState<number>(0);
  const onChangeStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
    const jsonDate = new Date(newStartDate).getTime();
    setStartDateSeconds(Number(jsonDate));
  };

  const [endDate, setEndDate] = useState("");
  const [endDateSeconds, setEndDateSeconds] =
    useState<number>(defaultEndNumber);
  const onChangeEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = e.target.value;
    setEndDate(newEndDate);
    const jsonDate = new Date(newEndDate).getTime();
    setEndDateSeconds(Number(jsonDate));
  };

  const dateValid = startDateSeconds > endDateSeconds;

  const [checkedItems, setCheckedItems] = useState({
    Microsoft: false,
    Apple: false,
    Sony: false,
  });

  const companyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  const clickResetEvent = () => {
    setStartPrice(0);
    setEndPrice(defaultEndNumber);
    setStartDate("");
    setEndDate("");
    setCheckedItems( {
      Microsoft: false,
      Apple: false,
      Sony: false,
    });
  }

  return (
    <SForm {...other} className={searchModalSwitch ? "active" : undefined}>
      <RegularButton onClick={searchModalCloseEvent}>閉じる</RegularButton>
      <STitleText tag="h2">絞り込みフォーム</STitleText>
      <SInner>
        <FlexBox>
          <RegularText>開始価格</RegularText>
          <RegularInput
            type="number"
            onChange={onChangeStartPrice}
          ></RegularInput>
          <p>円</p>
        </FlexBox>
        <FlexBox>
          <RegularText>終了価格</RegularText>
          <RegularInput
            type="number"
            onChange={onChangeEndPrice}
          ></RegularInput>
          <p>円</p>
        </FlexBox>
        <p>{isValid && "数値の入力値がおかしいです"}</p>
        <p style={{ textAlign: "center" }}>日付絞り込み</p>
        <FlexBox>
          <p>開始日</p>
          <RegularInput type="date" onChange={onChangeStartDate} />
        </FlexBox>
        <FlexBox>
          <p>終了日</p>
          <RegularInput type="date" onChange={onChangeEndDate} />
        </FlexBox>
        <p style={{ textAlign: "center" }}>
          {dateValid && "開始日と終了日が逆ですよ"}
        </p>
        <p style={{ textAlign: "center" }}>販売会社選択</p>
        <CheckBox
          id="Microsoft"
          name="Microsoft"
          value="Microsoft"
          checked={checkedItems.Microsoft}
          onChange={companyChange}
        >
          Microsoft
        </CheckBox>
        <CheckBox
          id="Apple"
          name="Apple"
          value="Apple"
          checked={checkedItems.Apple}
          onChange={companyChange}
        >
          Apple
        </CheckBox>
        <CheckBox
          id="Sony"
          name="Sony"
          value="Sony"
          checked={checkedItems.Sony}
          onChange={companyChange}
        >
          Sony
        </CheckBox>
        <p style={{ textAlign: "center" }}>人気の有無</p>
        <RadioButton name="isPopular">人気あり</RadioButton>
        <RadioButton name="isPopular">人気なし</RadioButton>
      </SInner>
      <RegularButton>確定</RegularButton>
      <RegularButton onClick={clickResetEvent}>リセット</RegularButton>
    </SForm>
  );
};

export default SearchForm;
