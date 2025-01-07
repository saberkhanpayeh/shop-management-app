import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalType: "",
  formTitle: "",
  confirmBtn: "",
  cancelBtn: "",
  product:{id:"",name:"",quantity:0,price:0},
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
      state.product={...action.payload};
    },
    removeProduct:(state,action)=>{
      state.modalType="REMOVE_PRODUCT";
      state.formTitle="آیا از حذف این محصول مطمئن هستید؟";
      state.confirmBtn="حذف";
      state.cancelBtn="لغو";
      state.product={...action.payload};
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
export const { addProductForm, editProductForm, removeProductForm,removeProduct } =modalSlice.actions;
