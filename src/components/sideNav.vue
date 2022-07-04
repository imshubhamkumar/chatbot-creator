<template>
  <div class="side-menu shadow inactive">
    <div class="side-top-section">
      <div class="logo">
        <i class="bi bi-robot"></i>
      </div>
    </div>
    <div className="main-menu">
      <ul>
        <li>
          <a href="#" className="menu-item">
            <div className="menu-icon">
              <i className="bi bi-speedometer2"></i>
            </div>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#" className="menu-item">
            <div className="menu-icon">
              <i className="bi bi-cursor"></i>
            </div>
            <span>Publish all</span>
          </a>
        </li>
      </ul>
    </div>

    <div className="side-menu-footer">
      <div className="side-menu-footer-item">
        <div className="side-menu-footer-icon">
          <i className="bi bi-gear"></i>
        </div>
        <span>Settings</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sideNav",
};
</script>
<style>
  .side-menu {
    position: fixed;
    background-color: #162137;
    width: 72px;
    height: 100%;
    box-sizing: border-box;
    padding: 0px;
    text-align: center;
    transition: width .2s ease-in;
  }

  .side-top-section {
    position: relative;
    background-color:#61dafb ;
  }
.side-menu .side-top-section .logo{
  width: 100%;
  height: 40px;
  font-size: 35px;
  overflow: hidden;
  display: inline-block;

}

.side-menu.inactive .side-top-section .logo {
  width: 100%;
  height: 40px;
}

.side-menu .side-top-section .logo img {
  max-width: 100%;
  max-height: 100%;
}

.side-menu .side-top-section .toggle-menu-btn {
  color: #61dafb;
  font-size: 25px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

.side-menu.inactive .side-top-section .toggle-menu-btn {
  right: -50px;
}

.devider {
  width: 100%;
  height: 1px;
  border-radius: 1px;
  background-color: #61dafb;
}

.side-menu .main-menu {
  margin: 5px 0;
}

.side-menu .main-menu ul li {
  list-style: none;
}

.side-menu .main-menu ul {
  padding-left: 0;
}

.side-menu .main-menu .menu-item {
  text-decoration: none;
  color: #ffffff;
  display: block;
  font-size: 15px;
  font-weight: 600;
}

.side-menu .main-menu .menu-item span {
  position: absolute;
  display: inline-block;
  line-height: 40px;
  opacity: 1;
  transition: opacity .2s ease-in;
}

.side-menu.inactive .main-menu .menu-item span {
  opacity: 0;
}

.side-menu .main-menu .menu-item .menu-icon {
  color: #61dafb;
  font-size: 20px;
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

.side-menu-footer{
  width: 100%;
  background: #162137;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
}

.side-menu-footer .side-menu-footer-item {
  font-size: 20px;
  font-weight: 600;
  display: block;
}

.side-menu .side-menu-footer span {
  position: absolute;
  display: inline-block;
  line-height: 40px;
  opacity: 1;
  transition: opacity .2s ease-in;
}

.side-menu.inactive .side-menu-footer-item span {
  opacity: 0;
}

.side-menu-footer .side-menu-footer-item .side-menu-footer-icon{
  color: #61dafb;
  font-size: 25px;
  display: inline-block;
  width: 28px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>
