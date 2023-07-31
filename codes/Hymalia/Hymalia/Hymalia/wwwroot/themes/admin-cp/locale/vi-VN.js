﻿const languages = {
    "input_mask_date": "dd/mm/yyyy",
    "input_mask_datetime": "HH:MM dd/mm/yyyy",
    "input_mask_date_placeholder": "dd/mm/yyyy (ngày/tháng/năm)",
    "input_mask_datetime_placeholder": "HH:mm dd/mm/yyyy (giờ:phút ngày/tháng/năm)",
    "moment_date_format": "DD/MM/YYYY",
    "moment_datetime_format": "hh:mm DD/MM/YYYY",
    "Data loading...": "Đang tải dữ liệu...",
    "Confirm title": "Himalaya",
    "Alert title": "Himalaya",
    "Accept": "Đồng ý",
    "Cancel": "Hủy bỏ",
    "OK": "OK",
    "Connect to server failed!": "Kết nối đến máy chủ thất bại!",
    "Do you want to sign-out?": "Bạn có thật sự muốn thoát khỏi ứng dụng?",
    "Change password": "Đổi mật khẩu",
    "{0} is required": "{0} là dữ liệu bắt buộc.",
    "{0} records": "{0} bảng ghi",
    "Save changes": "Lưu thay đổi",
    "Save": "Lưu",
    "Delete": "Xóa",
    "Close": "Đóng",
    "Add new {0}": "Thêm mới {0}",
    "Edit {0}":"Chỉnh sửa {0}",
    "Please select one or more item (s) to delete": "Hãy chọn một hoặc nhiều dữ liệu cần xóa.",
    "Do you sure to delete selected item (s)": "Bạn có thật sự muốn xóa (những) dữ liệu đã chọn?",
    "You must re-grant permission for this employee after change department": "Bạn cần phân quyền lại cho nhân viên này sau khi thực hiện thay đổi phòng ban.",
    "Warehouse slot has not been display configuration": "Vị trí kho chưa được cấu hình hiển thị.",
    "Please select a unit":"Hãy chọn đơn vị tính.",
    "Please select a product": "Hãy chọn sản phẩm.",
    "Please enter a selling quantity": "Hãy nhập số lượng bán.",
    "Please enter a quantity": "Hãy nhập số lượng.",
    "Please select a currency": " Hãy chọn một đơn vị tiền tệ",
    "Selling price not invalid": "Giá bán không hợp lệ",
    "Buying price not invalid": "Giá mua không hợp lệ",
    "Quantity not invalid":"Số lượng không hợp lệ",
    "Details of {0}": "Thông tin chi tiết {0}",
    "Approved":"Phê duyệt",
    "Unapproved":"Không duyệt",
    "Do you sure to submit approval this document": "Bạn có thật sự muốn gửi phép duyệt văn bản/tài liệu này?",
    "Discount percent not invalid":"Chiết khấu không hợp lệ",
    "Discount not invalid":"Giá chiết khấu không hợp lệ",
    "Price not invalid":"Giá bán không hợp lệ",
    "VAT not invalid":"VAT không hợp lệ",
    "Select slot":"Chọn ví trí kho",
    "Please enter a progress": "Hãy nhập tiến độ",
    "Split product in stock": "Tách sản phẩm trong kho",
    "Please select a material": "Hãy lựa chọn vật tư",
    "Material code": "Mã vật tư",
    "Material name": "Tên vật tư",
    "Unit.": "ĐVT",
    "Quantity": "Số lượng",
    "Please enter a delivery quantity": "Hãy nhập số lượng giao hợp lệ",
    "Please enter a total order": "Hãy nhập số tổng đơn hợp lệ",
    "Please enter a delivered quantity": "Hãy nhập số lượng đã giao hợp lệ",
    "Concurrently department":"Phòng ban kiêm nhiệm",
    "dataTable": {
        "sProcessing": "Đang xử lý...",
        "sLengthMenu": "Xem _MENU_ mục",
        "sZeroRecords": "Không tìm thấy dòng nào phù hợp.",
        "sInfo": "Đang xem _START_ đến _END_ trong tổng số _TOTAL_ mục",
        "sInfoEmpty": "Đang xem 0 đến 0 trong tổng số 0 mục",
        "sInfoFiltered": "(được lọc từ _MAX_ mục)",
        "sInfoPostFix": "",
        "sSearch": "Tìm:",
        "sUrl": "",
        "oPaginate": {
            "DataTable sFirst": "Đầu",
            "DataTable sPrevious": "Trước",
            "DataTable sNext": "Trước",
            "DataTable sLast": "Cuối"
        }
    },
    "Please select a position": "Vui lòng chọn vị trí kho",
    "Please enter a proportion": "Vui lòng nhập tỷ trọng",
    "Do you sure to update product to warehouse?": "Bạn có thật sự muốn cập nhật tất cả sản phẩm trong phiếu này vào kho?",
    "Do you sure to save products to warehouse?":"Bạn chắc chắn muốn cập nhật số lượng (những) sản phẩm (hoặc vật tư) này vào kho?",
    get: (key, def) => {
        if (!key)
            return def ? languages.get(def) : null;

        return languages[key] || key;
    }
}