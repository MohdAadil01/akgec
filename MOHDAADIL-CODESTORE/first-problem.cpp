// Online C++ compiler to run C++ program online
// PROBLEM 1 PRIN THE PATTERN
#include <iostream>
using namespace std;

int main()
{
    // PROBLEM 1
    int n = 5;
    int i;
    int j;
    int k;
    for (i = 1; i <= n; i++)
    {
        for (j = i; j < n; j++)
            cout << " ";
        for (k = 1; k <= (2 * i - 1); k++)
            cout << "*";
        cout << endl;
    }
    for (i = n - 1; i >= 1; i--)
    {
        for (j = n; j > i; j--)
            cout << " ";
        for (k = 1; k <= (2 * i - 1); k++)
            cout << "*";
        cout << endl;
    }
    return 0;
}