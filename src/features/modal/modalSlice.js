import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalType: "",
  formTitle: "",
  confirmBtn: "",
  cancelBtn: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    addProductForm: (state, action) => {
      (state.modalType = "ADD_FORM"), (state.formTitle = "ایجاد محصول جدید");
      state.confirmBtn = "ایجاد";
      state.cancelBtn = "انصراف";
    },
    editProductForm: (state, action) => {
      (state.modalType = "EDIT_FORM"), (state.formTitle = "ویرایش اطلاعات");
      state.confirmBtn = "ثبت اطلاعات جدید";
      state.cancelBtn = "لغو";
    },
    removeProductForm: (state) => {
      state.modalType = "";
      state.formTitle = "";
      state.confirmBtn = "";
      state.cancelBtn = "";
    },
  },
});

export default modalSlice.reducer;
export const { addProductForm, editProductForm, removeProductForm } =modalSlice.actions;
