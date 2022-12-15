const getValue = () => {
    return 0
  }
  
  enum List {
    A = getValue(),
    B = 2,  // 此处必须要初始化值，不然编译不通过
    C
  }