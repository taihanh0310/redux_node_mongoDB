
export const DEFAULT_FOLDER = '/';
export const DEFAULT_URL = 'localhost:3000';
export const API_URL = 'http://localhost:3001/api/v1/products';

export const DEFAULT_DATE = '1900-01-01 00:00:00';
export const TIMEOUT = 0;
export const TIMEOUT500 = 500;
export const DATA_LIMIT = 10;
export const PAGE_LIMIT = 5;
export const COLS_NAME = {
	'1': 'one',
	'2': 'two',
	'3': 'three',
	'4': 'four',
	'5': 'five'
};
export const EMPTY_ROW = {id: -1};
export const WARNING_INTERVAL = 1000 * 60 * 30; //: 30 minutes
export const NUM_PAGING = 3;

export const GENDERS = [
    {id: 'M', name: 'Male'},
    {id: 'FM', name: 'Female'},
    {id: 'O', name: 'Other'},
];

export const IS_SHIPPER = [
    {id: 0, name: 'Vender'},
    {id: 1, name: 'Shipper'},
];

export const MARITAL_STATUS = [
    {id: 'M', name: 'Married'},
    {id: 'S', name: 'Single'},
    {id: 'D', name: 'Divorced'},
    {id: 'W', name: 'Widowed'},
    {id: 'O', name: 'Other'},
];

export const UNIT_TYPE_LIST = [
  { id: 'UM', name: 'Unit of Matarial' },
  { id: 'US', name: 'Unit of Style' }
];

export const TYPE_COLOR = [
  { id: 'TPX', name: 'Màu pantone TPX' },
  { id: 'TCX', name: 'Màu pantone TCX' },
  { id: 'OTHER', name: 'Other' }
];

export const TYPE_SIZE_LIST = [
  { id: 'SNPL', name: 'Size nguyên phụ liệu' },
  { id: 'SS', name: 'Size hàng hóa' }
];

export const TYPE_WAREHOUSE = [
  { id: 'NPL', name: 'Material' },
  { id: 'TP', name: 'Product' },
  { id: 'M', name: 'Sample' },
  { id: 'O', name: 'Other' }
];

export const SALE_ORDER_STATUS = [
  { id: 1, name: 'Open' },
  { id: 2, name: 'Cancel' },
  { id: 3, name: 'Pending' },
  { id: 4, name: 'ReOpen' },
  { id: 5, name: 'Close' }
];

export const SALE_ORDER_STYLE_STATUS = [
  { id: 1, name: 'Open' },
  { id: 2, name: 'Close' },
  { id: 3, name: 'ReOpen' },
];

export const SALE_ORDER_STYLE_VERSION_STATUS = [
  { id: 1, name: 'Open' },
  { id: 2, name: 'Close' },
  { id: 3, name: 'ReOpen' },
];

export const SALE_ORDER_ITEM_LIST_STATUS = [
  { id: 1, name: 'Open' },
  { id: 2, name: 'Close' },
  { id: 3, name: 'ReOpen' },
];

export const SALE_ORDER_BS_CHILD_STATUS = [
  { id: 1, name: 'Open' },
  { id: 2, name: 'Close' },
  { id: 3, name: 'ReOpen' },
];

export const SALE_ORDER_VERSION_ACTIVITY_STATUS = [
  { id: 0, name: 'New' },
  { id: 1, name: 'Doing' },
  { id: 2, name: 'Done' },
  { id: 3, name: 'Fixing' },
];

export const BALANCE_SHEET_STATUS = [
  { id: 1, name: 'Open' },
  { id: 2, name: 'Approved' },
  { id: 3, name: 'ReOpen' },
];

export const PURCHASE_REQUEST_STATUS = [
  { id: 1, name: 'Open' },
  { id: 2, name: 'Close' },
  { id: 3, name: 'ReOpen' },
  { id: 4, name: 'Approve' },
];

export const PURCHASE_ORDER_STATUS = [
  { id: 1, name: 'Open' },
  { id: 2, name: 'Close' },
  { id: 3, name: 'ReOpen' },
  { id: 4, name: 'Approve' },
];

export const SALE_ORDER_PAYMENT_STATUS = [
  { id: 1, name: 'Pending' },
  { id: 2, name: 'Requesting' },
  { id: 3, name: 'Approved' },
  { id: 4, name: 'Refuse' },
  { id: 5, name: 'Receiving' }
];

export const PRODUCTION_ORDER_FLOW_STATUS = [
  { id: 1, name: 'Open' },
  { id: 2, name: 'Close' },
  { id: 3, name: 'ReOpen' },
  { id: 4, name: 'Approved' },
  { id: 5, name: 'Finish' }
];

export const PRODUCTION_ORDER_STATUS = [
  {id: 12, name: 'New'}, 
  {id: 9, name: 'Approved'}, 
  {id: 10, name: 'Not Approved'}, 
  {id: 11, name: 'Recheck'}
];

export const ARR_PRODUCTION_ORDER_STATUS = {
  'new': 12,
  'approved': 9,
  'not_approved': 10,
  'recheck': 11,
};

export const WH_MATERIAL_EXPORT_STATUS = [
  {id: 0, name: 'New'}, 
  {id: 1, name: 'WH Approved'}, 
  {id: 2, name: 'WH Not Approved'}, 
  {id: 3, name: 'BOD Approved'}, 
  {id: 4, name: 'BOD Not Approved'}, 
  {id: 5, name: 'Cancel'},
];

export const APPROVED_STATUS = [
  {id: 0, name: 'New'}, 
  {id: 1, name: 'Approved'}, 
  {id: 2, name: 'Not Approved'}, 
];

export const WH_MATERIAL_BOOK = 1;

export const PURCHASE_ORDER_PAYMENT_STATUS = [
  { id: 1, name: 'Pendding' },
  { id: 2, name: 'Paid' },
  { id: 3, name: 'UnPaid' }
];

export const PURCHASE_ORDER_PAYMENT_RECEIVE_STATUS = [
  { id: 0, name: 'Pendding'},
  { id: 1, name: 'Partially Refunded' },
  { id: 2, name: 'Returned' },
];

export const IS_ACTIVE_LIST = [
  { id: 1, name: 'Actived' },
  { id: 0, name: 'Deactivated' }
];

export const IS_APPROVED_STATUS_LIST = [
  { id: 1, name: 'Approved' },
  { id: 2, name: 'Disapproved' },
  { id: 3, name: 'Pendding' }
];

export const LANGUAGE_LIST = [
  { id: 1, name: 'VIET NAM' },
  { id: 2, name: 'ENGLISH' },
  { id: 3, name: 'CHINA' },
  { id: 4, name: 'JAPAN' }
];

export const TYPE_COSTING = {
  truth: 'T',
  customer: 'C'
};

export const TYPE_ORDER_MASTER = [
  { id: 'kept', name: 'Keeping' },
  { id: 'invoice', name: 'Invoice' }
];

export const TYPE_BALANCE_SHEET = [
  { id: 'SO', name: 'For Version'},
  { id: 'T', name: 'All'},
];

export const STATUS_MANAGEMENT_SETTING = [
    {id: 'PaymentStatus', name: 'Payment Status'},
    {id: 'ApproveStatus', name: 'Approve Status'},
    {id: 'ActiveStatus', name: 'Active Status'},
    {id: 'WarehouseType', name: 'Warehouse Type'},
    {id: 'GenderType', name: 'Gender Type'},
    {id: 'MaritalStatus', name: 'Marital Status'},
    {id: 'UnitType', name: 'Unit Type'},
    {id: 'ActivityStatus', name: 'Activity Status'},
];

export const TAX_TYPE = [
    {id: 1 , name: 'GTGT'},
    {id: 2 , name: 'Nhập Khẩu'},
    {id: 3 , name: 'TTDB'},
    {id: 4 , name: 'Thuế khác'},
    {id: 5 , name: 'Xuất khẩu'},
    {id: 6 , name: 'Thu nhập cá nhân'},
    {id: 7 , name: 'Thuế môn bài'}
];

export const CLAIM_TYPE = [
    {id: 1 , name: 'Tiền mặt'},
    {id: 2 , name: 'Chuyển khoản'},
];

export const NO_FILE = "images/web/no_file.png";