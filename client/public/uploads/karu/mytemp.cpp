#include <bits/stdc++.h>
#pragma GCC optimize("Ofast")
#pragma GCC target("avx,avx2,fma")
#include <bits/stdc++.h>
using namespace std;
#define gc getchar_unlocked
#define fo(i, n) for (i = 0; i < n; i++)                                    //for loop from 0 to n
#define Fo(i, k, n) for (i = k; k < n ? i < n : i > n; k < n ? i += 1 : i -= 1)  //for loop from k to n
#define ll long long
#define si(x) scanf("%d", &x)                                               //for fast input
#define sl(x) scanf("%lld", &x)
#define ss(s) scanf("%s", s)                                                //cin or scanf as per situation
#define pi(x) printf("%d\n", x)
#define pl(x) printf("%lld\n", x)
#define ps(s) printf("%s\n", s)
#define deb(x) cerr << "\nDEBUG:" << #x << "=" << x << endl                    //for debugging
#define deb2(x, y) cerr << "\nDEBUG:" << #x << "=" << x << "," << #y << "=" << y << endl
#define pb push_back                                                        //for vectors
#define mp make_pair
#define F first                                                             //used to access first element of pair
#define S second                                                            //used to access second element of pair
#define all(x) x.begin(), x.end()                                           //returns the begining and ending iterator for vectors,set,map etc.
#define clr(x) memset(x, 0, sizeof(x))                                              //supposed to clear a vector or int
#define sortall(x) sort(all(x))                                            //to sort the complete vector etc.
#define tr(it, a) for (auto it = a.begin(); it != a.end(); it++)                    //used for iterating on a set
#define PI 3.1415926535897932384626
//my
#define yes cout<<"YES"<<endl
#define no cout<<"NO"<<endl
typedef pair<int, int> pii;
typedef pair<ll, ll> pl;
typedef vector<int> vi;
typedef vector<ll> vl;
typedef vector<pii> vpii;
typedef vector<pl> vpl;
typedef vector<vi> vvi;
typedef vector<vl> vvl;
int mpow(int base, int exp);

const int mod = 1'000'000'007;
//const int N = 3e5, M = N;
//=======================
ll factorial(ll n) 
{ 
    if (n == 0) 
        return 1; 
    return n * factorial(n - 1); 
}

void solve()
{
        ll n=0,m=0,ct=0;
        cin>>n>>m;
        vector<ll>val(n+1,1);
        for(ll i=2;i<=n;i++)
        {
            ll k=m%i;
            ct+=val[k];
            for(ll j=k;j<=n;j+=i)
            val[j]++;
        }
        cout<<ct<<"\n";
    
}

int main()
{
    ll t = 1;
    cin >> t;
    while (t--)
    {
        //cout<<"Case #"<<t+1<<": ";
        solve();
    }

    return 0;
}

int mpow(int base, int exp)                                                //to calculate huge powers using mod  returns (base^exp)%mod
{
    base %= mod;
    int result = 1;
    while (exp > 0)
    {
        if (exp & 1)
            result = ((ll)result * base) % mod;
        base = ((ll)base * base) % mod;
        exp >>= 1;
    }
    return result;
}