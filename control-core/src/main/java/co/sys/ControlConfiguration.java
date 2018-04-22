//package co.sys;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//
//public class ControlConfiguration extends WebSecurityConfigurerAdapter {
//
////	private AccessDeniedHandler accessDeniedHandler;
////
////	@Inject
////	public ControlConfiguration(AccessDeniedHandler accessDeniedHandler) {
////		this.accessDeniedHandler = accessDeniedHandler;
////	}
//
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//
//		http.authorizeRequests()
//				.anyRequest().authenticated()
//				.and()
//				.formLogin()
//				.loginPage("/login")
//				.permitAll();
//	}
//
//	// create two users, root and admin
//	@Autowired
//	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//
//		auth.inMemoryAuthentication()
//				.withUser("root").password("toor").roles("ROOT")
//				.and()
//				.withUser("admin").password("admin").roles("ADMIN");
//	}
//
//
//}
