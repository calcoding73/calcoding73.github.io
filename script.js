window.addEventListener('load', function() {
    document.querySelector('.preloader').style.display = 'none';
  });
  
  const code = document.getElementById('code');
  const cursor = document.getElementById('cursor');
  const output = document.getElementById('output');
  const languageSelector = document.getElementById('language');
  
  const languages = {
    "Python Hello World": `
  def greet(name):
    print("Hello, " + name + "!")
  greet("World")
  `,
    "C++ Hello World": `
  #include <iostream>
  int main() {
    std::cout << "Hello, World!";
    return 0;
  }
  `,
    "Java Hello World": `
  public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello, World!");
    }
  }
  `,
    "JavaScript Hello World": `
  console.log("Hello, World!");
  `
  };
  
  let currentLanguage = "Python Hello World";
  let i = 0;
  const speed = 800; 
  let repeat = 0; 
  
  function typeCode() {
    if (i < languages[currentLanguage].length) {
      code.innerHTML = languages[currentLanguage].substring(0, i + 1) + '<span id="cursor">|</span>';
      i++;
      setTimeout(typeCode, 60 / speed * 1000); 
    } else {
      output.innerText = 'Output:\nHello, World!';
      setTimeout(resetCode, 2000); 
    }
  }
  
  function resetCode() {
    i = 0;
    repeat++;
    code.innerHTML = ''; 
    output.innerText = ''; 
    const languagesArray = Object.keys(languages);
    currentLanguage = languagesArray[(repeat % languagesArray.length)];
    languageSelector.innerText = currentLanguage;
    setTimeout(typeCode, 100); 
  }
  
  typeCode();