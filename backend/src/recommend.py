import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel


def get_recommendations(data, name):

    campgrounds = []
    for campground in data:
        temp = {
            'id': campground['id'],
            'name': campground['name'],
            'description': campground['description']
        }
        campgrounds.append(temp)

    df = pd.DataFrame(campgrounds, columns=['name', 'description'])

    tfidf = TfidfVectorizer(stop_words='english')
    tfidf_matrix = tfidf.fit_transform(df['description'])
    tfidf_matrix.shape

    cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
    cosine_sim.shape

    indices = pd.Series(df.index, index=df['name']).drop_duplicates()

    idx = indices[name]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:4]
    campground_indices = [i[0] for i in sim_scores]

    return df['name'].iloc[campground_indices]
