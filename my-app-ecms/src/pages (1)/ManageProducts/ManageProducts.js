import "./ManageProducts.css";
const ManageProducts = {
  render() {
    return /*html*/ `
    <div class="containerTable">
    <table class="table table-hover" border='1'>
        <thead>
            <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Giá</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Hình ảnh</th>
                <th scope="col">Hành động</th>
            </tr>
        </thead>
        <tbody>
            <tr class="">
                <td scope="row">1</td>
                <td>Phở Gà</td>
                <td>40000</td>
                <td scope="row">2</td>
                <td>image</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>

                </td>
            </tr>
        </tbody>
    </table>
</div>
    `;
  },
  start(){
    return this.render()
  }
};
export default ManageProducts;
