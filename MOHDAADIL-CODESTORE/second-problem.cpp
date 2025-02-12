#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

bool isPrime(int num)
{
    if (num <= 1)
        return false;
    for (int i = 2; i <= sqrt(num); ++i)
    {
        if (num % i == 0)
            return false;
    }
    return true;
}

vector<int> modify(const vector<int> &arr)
{
    vector<int> primes;
    vector<int> nonPrimes;

    for (int num : arr)
    {
        if (isPrime(num))
        {
            primes.push_back(num);
        }
        else
        {
            nonPrimes.push_back(num);
        }
    }

    sort(primes.begin(), primes.end());

    sort(nonPrimes.begin(), nonPrimes.end(), greater<int>());

    vector<int> result;

    if (!primes.empty())
    {
        result.push_back(primes.back());
        primes.pop_back();
    }

    result.insert(result.end(), nonPrimes.begin(), nonPrimes.end());

    if (!primes.empty())
    {
        result.push_back(primes.front());
    }

    return result;
}

int main()
{

    vector<int> in1 = {5, 1, 8, 11, 2};

    vector<int> in2 = {1, 6, 4, 13, 9, 3};

    vector<int> output1 = modify(in1);
    vector<int> output2 = modify(in2);

    cout << "res 1: ";
    for (int num : output1)
    {
        cout << num << " ";
    }
    cout << endl;

    cout << "Result: ";
    for (int num : output2)
    {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}