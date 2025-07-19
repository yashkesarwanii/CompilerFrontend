const defaultCodeByLanguage = {
  Python: `print("Hello, Python!")`,
  JavaScript: `console.log("Hello, JavaScript!");`,
  "C++": `#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, C++!" << endl;\n    return 0;\n}`,
  Java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}`,
};

export default defaultCodeByLanguage;
