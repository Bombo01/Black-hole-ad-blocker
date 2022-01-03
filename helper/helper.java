import java.io.*;
import java.util.Scanner;

public class helper {
    public static void main(String[] args) throws IOException {
        if (args.length == 1) {
            FileReader fileReader = new FileReader(args[0]);
            PrintWriter printWriter = new PrintWriter("output.json");
            Scanner scanner = new Scanner(fileReader);
            printWriter.println("[");
            int i = 0;
            while (scanner.hasNextLine()) {
                if (i > 0)
                    printWriter.println(",");
                String linea = scanner.nextLine();
                try {
                    if (linea.startsWith("www."))
                        linea = linea.substring(4);
                    if (linea.charAt(0) != '#') {
                        printWriter.print("\t" + "\"*://*." + linea + "/*\"");
                        i++;
                    }
                } catch (StringIndexOutOfBoundsException ignored) {
                }
            }
            printWriter.println("\n]");
            printWriter.close();
        } else {
            System.out.println("Error! Usage: java helper.java file.txt");
        }
    }
}