
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import HeaderMenu from './HeaderMenu';
function Header(props) {
  return (
      <section id="header"className="container-fluid"{...props}>
      		<header className="container">
      			<div className="row py-2">
      				<div className="col col-5 col-md-4 align-items-start justify-content-center">
                <HeaderLogo />
              </div>
      				<div className="col col-0 col-md-5 align-items-center justify-content-center">
      					<HeaderSearch />
      				</div>
      				<div className="col col-6 col-md-3 col-xxl-2 align-items-end justify-content-center">
      					<HeaderMenu />
      				</div>
      			</div>
      		</header>
      </section>
  );
}

export default Header;
