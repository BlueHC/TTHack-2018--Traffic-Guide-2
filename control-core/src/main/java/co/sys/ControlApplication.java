package co.sys;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.PropertySource;


@SpringBootApplication
@PropertySource("classpath:application.properties")
public class ControlApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(ControlApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(ControlApplication.class, args);
	}

//	@Configuration
//	static class WebMvcConfig implements WebMvcConfigurer {
//
//		@Override
//		public void addViewControllers(ViewControllerRegistry registry) {
//			registry.addViewController("/").setViewName("index");
//		}
//
//	}

}
