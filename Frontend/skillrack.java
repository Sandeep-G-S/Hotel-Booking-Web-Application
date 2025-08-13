import java.util.*;

class skillrack{
    public static void main ( String args[] ){
        Scanner sc = new Scanner (System.in);
        int x = 501;
        int y = 540;
        int d = 7;

        for ( int i = x; i <= y; i++ ){

            String s =Integer.toString(i);
            int sum = 0;
            int cmp = s.charAt(0) - '0';
            if ( s.indexOf(Integer.toString(d)) < 0 ){
                for ( int j = s.length() / 2; j < s.length(); j++ ){
                    sum += s.charAt(j) - '0';
                }
            } else{
                continue;
            }
            if ( cmp > sum ){
                System.out.print(i+" ");
            }
        }
    }
}